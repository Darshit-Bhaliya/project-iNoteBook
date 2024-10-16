import React , {useContext} from 'react';
import noteContext from '../Context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext)
  return (
    <div>
      This is about page!
    </div>
  )
}

export default About
