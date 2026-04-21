const SectionHead = ({ num, en, zh }) => (
  <div className="section-head">
    <span className="num">{num}</span>
    <h2>{en}</h2>
    <span className="zh">· {zh}</span>
  </div>
)

export default SectionHead
