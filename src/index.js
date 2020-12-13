import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Person = ({img, name, job, children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <section className='person'>
      <img src={url} alt={name}/>
      <h3> {name} </h3>
      <h3> {job} </h3>
      {children}
    </section>
  )
}

const PersonList = () => {
  return (
    <React.Fragment>
      <div className='title'>
        <h2>Welcome to my user list</h2>
      </div>
      <section className='person-list'>
        <Person img={30} name='Yayad' job='Software Dev' />
        <Person img={55} name='Bel Yayad' job='Project Management'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, officia.</p>
        </Person>
        <Person img={21} name='Mr Gouyad' job='Mobile Developer' />
        <Person img={67} name='Kou Langèt' job='Web Developer'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, necessitatibus!</p>
        </Person>
        <Person img={10} name='Bèl Poze Tonton' job='Network Security' />
      </section>
    </React.Fragment>
  )
}

ReactDOM.render(<PersonList/>, document.getElementById('root'))
