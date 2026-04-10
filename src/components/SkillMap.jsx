import { useCallback, useRef, useState } from 'react'
import { LEVEL_COLORS, LEVEL_LABELS, SKILL_EDGES, SKILL_NODES } from '../data/skillMapData.js'

const VIEWBOX_W = 1000
const VIEWBOX_H = 680
const NODE_RX = 54
const NODE_RY = 28

function getEdgePath(from, to) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const cx1 = from.x + dx * 0.45
  const cy1 = from.y
  const cx2 = to.x - dx * 0.45
  const cy2 = to.y
  return `M${from.x},${from.y} C${cx1},${cy1} ${cx2},${cy2} ${to.x},${to.y}`
}

function arrowId(fromId, toId) {
  return `arrow-${fromId}-${toId}`
}

export default function SkillMap({ onNavigate }) {
  const svgRef = useRef(null)
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  // Pan & zoom state
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 })
  const drag = useRef(null)

  const nodeById = Object.fromEntries(SKILL_NODES.map((n) => [n.id, n]))

  // Highlight edges connected to hovered/selected node
  const activeId = selected ?? hovered
  const highlightedEdges = activeId
    ? new Set(
        SKILL_EDGES.filter((e) => e.from === activeId || e.to === activeId).map(
          (e) => `${e.from}→${e.to}`
        )
      )
    : null

  // Nodes that are deps of or depend on active
  const relatedNodes = activeId
    ? new Set(
        SKILL_EDGES
          .filter((e) => e.from === activeId || e.to === activeId)
          .flatMap((e) => [e.from, e.to])
      )
    : null

  /* ---- Pan handlers ---- */
  const onPointerDown = useCallback((e) => {
    if (e.target.closest('.sm-node')) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { startX: e.clientX, startY: e.clientY, ox: transform.x, oy: transform.y }
  }, [transform])

  const onPointerMove = useCallback((e) => {
    if (!drag.current) return
    const dx = (e.clientX - drag.current.startX) / transform.scale
    const dy = (e.clientY - drag.current.startY) / transform.scale
    setTransform((t) => ({ ...t, x: drag.current.ox + dx, y: drag.current.oy + dy }))
  }, [transform.scale])

  const onPointerUp = useCallback(() => { drag.current = null }, [])

  /* ---- Zoom handler ---- */
  const onWheel = useCallback((e) => {
    e.preventDefault()
    const factor = e.deltaY < 0 ? 1.12 : 0.9
    setTransform((t) => {
      const newScale = Math.min(2.5, Math.max(0.4, t.scale * factor))
      return { ...t, scale: newScale }
    })
  }, [])

  const resetView = () => setTransform({ x: 0, y: 0, scale: 1 })

  const selectedNode = selected ? nodeById[selected] : null

  return (
    <div className="sm-root">
      <div className="card sm-header-card">
        <h2>🗺️ Carte des compétences DevOps</h2>
        <p className="sm-intro">
          Graphe interactif des dépendances entre sujets. Survolez un nœud pour voir ses liens,
          cliquez pour afficher le détail et accéder à la section correspondante.
          Glissez pour déplacer, molette pour zoomer.
        </p>
        <div className="sm-legend">
          {Object.entries(LEVEL_LABELS).map(([key, label]) => (
            <span key={key} className="sm-legend-item">
              <span className="sm-legend-dot" style={{ background: LEVEL_COLORS[key] }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="card sm-canvas-card">
        <div className="sm-controls">
          <button type="button" className="sm-btn" onClick={resetView}>Réinitialiser la vue</button>
          {selected && (
            <button type="button" className="sm-btn sm-btn-clear" onClick={() => setSelected(null)}>
              Désélectionner
            </button>
          )}
        </div>

        <div
          className="sm-svg-wrapper"
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
            className="sm-svg"
            aria-label="Carte des compétences DevOps"
          >
            <defs>
              {SKILL_EDGES.map((e) => {
                const isActive = highlightedEdges?.has(`${e.from}→${e.to}`)
                const color = isActive ? LEVEL_COLORS[nodeById[e.to]?.level] ?? '#38bdf8' : '#2a2a2a'
                return (
                  <marker
                    key={arrowId(e.from, e.to)}
                    id={arrowId(e.from, e.to)}
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L0,6 L8,3 z" fill={color} />
                  </marker>
                )
              })}
            </defs>

            <g transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}>
              {/* Edges */}
              {SKILL_EDGES.map((e) => {
                const fromNode = nodeById[e.from]
                const toNode = nodeById[e.to]
                if (!fromNode || !toNode) return null
                const isActive = highlightedEdges?.has(`${e.from}→${e.to}`)
                const dimmed = highlightedEdges && !isActive
                const color = isActive ? LEVEL_COLORS[toNode.level] ?? '#38bdf8' : '#2a2a2a'
                return (
                  <path
                    key={`${e.from}-${e.to}`}
                    d={getEdgePath(fromNode, toNode)}
                    fill="none"
                    stroke={color}
                    strokeWidth={isActive ? 2.2 : 1.2}
                    strokeOpacity={dimmed ? 0.15 : isActive ? 1 : 0.5}
                    markerEnd={`url(#${arrowId(e.from, e.to)})`}
                    style={{ transition: 'stroke 0.2s, stroke-opacity 0.2s' }}
                  />
                )
              })}

              {/* Nodes */}
              {SKILL_NODES.map((node) => {
                const isActive = activeId === node.id
                const isRelated = relatedNodes?.has(node.id)
                const dimmed = activeId && !isActive && !isRelated
                const color = LEVEL_COLORS[node.level]

                return (
                  <g
                    key={node.id}
                    className="sm-node"
                    transform={`translate(${node.x},${node.y})`}
                    style={{ cursor: 'pointer', opacity: dimmed ? 0.25 : 1, transition: 'opacity 0.2s' }}
                    onMouseEnter={() => setHovered(node.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected((s) => (s === node.id ? null : node.id))}
                    role="button"
                    aria-label={node.label}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelected((s) => (s === node.id ? null : node.id))}
                  >
                    {/* Glow ring when active */}
                    {isActive && (
                      <ellipse
                        rx={NODE_RX + 8}
                        ry={NODE_RY + 8}
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        strokeOpacity="0.4"
                      />
                    )}
                    {/* Node body */}
                    <ellipse
                      rx={NODE_RX}
                      ry={NODE_RY}
                      fill={isActive ? `${color}22` : 'var(--card-bg-grad-end, #0a0a0a)'}
                      stroke={color}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{ transition: 'fill 0.2s, stroke-width 0.2s' }}
                    />
                    {/* Icon */}
                    <text
                      y={-6}
                      textAnchor="middle"
                      fontSize="16"
                      style={{ userSelect: 'none' }}
                    >
                      {node.icon}
                    </text>
                    {/* Label */}
                    <text
                      y={11}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="600"
                      fill={isActive ? color : 'var(--text-primary, #ededed)'}
                      fontFamily="Inter, sans-serif"
                      style={{ userSelect: 'none', transition: 'fill 0.2s' }}
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>

        {/* Detail panel */}
        {selectedNode && (
          <div className="sm-detail animate-fade-in">
            <div className="sm-detail-header">
              <span className="sm-detail-icon">{selectedNode.icon}</span>
              <div>
                <h3 className="sm-detail-title">{selectedNode.label}</h3>
                <span
                  className="sm-detail-level"
                  style={{ color: LEVEL_COLORS[selectedNode.level] }}
                >
                  {LEVEL_LABELS[selectedNode.level]}
                </span>
              </div>
            </div>
            <p className="sm-detail-desc">{selectedNode.desc}</p>

            <div className="sm-detail-deps">
              {SKILL_EDGES.filter((e) => e.to === selectedNode.id).length > 0 && (
                <div>
                  <span className="sm-detail-dep-label">Prérequis :</span>
                  {SKILL_EDGES.filter((e) => e.to === selectedNode.id).map((e) => {
                    const n = nodeById[e.from]
                    return (
                      <button
                        key={e.from}
                        type="button"
                        className="sm-dep-chip"
                        style={{ borderColor: LEVEL_COLORS[n.level], color: LEVEL_COLORS[n.level] }}
                        onClick={() => setSelected(e.from)}
                      >
                        {n.icon} {n.label}
                      </button>
                    )
                  })}
                </div>
              )}
              {SKILL_EDGES.filter((e) => e.from === selectedNode.id).length > 0 && (
                <div>
                  <span className="sm-detail-dep-label">Débloque :</span>
                  {SKILL_EDGES.filter((e) => e.from === selectedNode.id).map((e) => {
                    const n = nodeById[e.to]
                    return (
                      <button
                        key={e.to}
                        type="button"
                        className="sm-dep-chip"
                        style={{ borderColor: LEVEL_COLORS[n.level], color: LEVEL_COLORS[n.level] }}
                        onClick={() => setSelected(e.to)}
                      >
                        {n.icon} {n.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {onNavigate && (
              <button
                type="button"
                className="sm-open-btn"
                onClick={() => onNavigate(selectedNode.sectionId)}
              >
                Ouvrir la section {selectedNode.label} →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
