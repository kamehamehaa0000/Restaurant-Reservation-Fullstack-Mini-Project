import React from 'react'
import './reservation.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSolidSend } from 'react-icons/bi'

const Reservation = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [phone, setPhone] = useState(0)
  const navigate = useNavigate()

  const handleReservation = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/reservation/send',
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      alert(success(data.message))
      setFirstName('')
      setLastName('')
      setPhone(0)
      setEmail('')
      setTime('')
      setDate('')
      navigate('/success')
    } catch (error) {
      alert(error(error.response.data.message))
    }
  }
  const currentDate = new Date().toISOString().split('T')[0]

  const str = "You're"
  const str2 = 'Welcome '
  const str3 = 'Anytime...'

  return (
    <div className="res-container" id="reservation">
      <div className="left-illustration-container">
        <div className="ani-text">
          {str.split('').map((letter, index) => {
            return <h1 key={index + 902}>{letter}</h1>
          })}
        </div>
        <div className="ani-text">
          {str2.split('').map((letter, index) => {
            return <h1 key={index + 230}>{letter}</h1>
          })}
        </div>
        <div className="ani-text">
          {str3.split('').map((letter, index) => {
            return <h1 key={index + 500}>{letter}</h1>
          })}
        </div>
        <div className="res-text-span">
          <h2>We</h2>
          <h2>We</h2>
        </div>
        <div className="res-text-span">
          <h2>Satisfy</h2>
          <h2>Satisfy</h2>
        </div>
        <div className="res-text-span">
          <h2>Your</h2>
          <h2>Your</h2>
        </div>
        <div className="res-text-span">
          <h2>Hunger</h2>
          <h2>Hunger</h2>
        </div>
      </div>
      <div className="right">
        <div className="form-container">
          <form className="form">
            <div className="form-name">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-date-time">
              <input
                type="date"
                placeholder="Date"
                value={date}
                min={currentDate}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="form-email-number">
              <input
                required
                type="email"
                placeholder="Email"
                className="email_tag"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                required
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleReservation}>
              RESERVE NOW <BiSolidSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reservation
