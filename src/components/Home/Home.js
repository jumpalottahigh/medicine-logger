import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fire from '../../fire'
import Moment from 'react-moment'
import styled from 'styled-components'

import Button from '../Button/Button'

import './Home.css'

const Current = styled.h3`
  color: royalblue;
  box-shadow: 0 0 2px 2px royalblue;
`

const Next = styled.h3`
  color: seagreen;
  box-shadow: 0 0 2px 2px seagreen;
`

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMed: {
        time: null,
        name: ''
      },
      nextMed: {
        time: null,
        name: ''
      }
    }
  }

  async componentWillMount() {
    let medicineLogRef = fire
      .database()
      .ref('medicineLog')
      .orderByKey()
      .limitToLast(1)
    medicineLogRef.on('child_added', snapshot => {
      this.setState(snapshot.val())
    })
  }

  saveToFirebase() {
    fire
      .database()
      .ref('medicineLog')
      .push(this.state)
  }

  // Take care of button clicks
  handleMedicineClick = e => {
    console.log(e.target)
    console.log(e)
    let currentMed = {
      name: e.target.name,
      time: Date.now()
    }

    let nextMed = {
      name: e.target.name === 'burana' ? 'panadol' : 'burana',
      time: Date.now() + 1000 * 60 * 60 * 4
    }

    let newState = {
      currentMed,
      nextMed
    }

    // Update state and save it to Firebase
    this.setState(newState, () => this.saveToFirebase())
  }

  render() {
    return (
      <section>
        <div className="login-container">
          <Link className="button" to="/login">
            Login
          </Link>
        </div>
        <div style={{ marginTop: '4rem' }}>
          {this.state.currentMed.time &&
            this.state.currentMed.name && (
              <Current>
                Current: {this.state.currentMed.name} at{' '}
                <Moment date={this.state.currentMed.time} format="HH:mm" />
              </Current>
            )}
          {this.state.nextMed.time &&
            this.state.nextMed.name && (
              <Next>
                Next: {this.state.nextMed.name} at{' '}
                <Moment date={this.state.nextMed.time} format="HH:mm" />
              </Next>
            )}
          <Button onClick={this.handleMedicineClick} name="burana">
            Burana
          </Button>
          <Button onClick={this.handleMedicineClick} name="panadol">
            Panadol
          </Button>
        </div>
      </section>
    )
  }
}

export default Home
