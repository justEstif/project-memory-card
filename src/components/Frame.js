import './styles/Frame.css'
export default function Frames(props) {
  const { idx, poster, caption } = props
  const handleClick = (e) => {
    props.handleClick(idx)

  }
  return (
    <figure className="frame">
      <p>
        <img className="img" src={poster} alt="img title" onClick={handleClick} />
      </p>
      <figcaption className="caption">{caption}</figcaption>
    </figure>

  );
}
