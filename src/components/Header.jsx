import { TrollFace } from '/src/assets/troll-face.png';

export default function Header() {
  return (
    <header className='header'>
      <img
        src={TrollFace}
        className='header--image'
      />
      <h2 className='header--title'>Meme Generator</h2>
    </header>
  );
}
