import './styles/Frame.css'
export default function Frames(props) {
  const { picture, caption } = props
  return (
    <figure className="frame">
      <p>
        <img className="img" src={picture} alt="img title" />
      </p>
      <figcaption className="caption">{caption}</figcaption>
    </figure>

  );
}
