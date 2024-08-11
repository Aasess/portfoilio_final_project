// Ashish Neupane, Bipin Gurung, Sandeep Kaur

import React from 'react'
import { Modal, Card, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Profile.css'

//IMAGE
import ashishProfile from '../images/ashish-profile.jpg'
import SandeepPic from '../images/SandeepPic.jpg'
import bipinProfile from '../images/ProfileBipin.jpg'

const profiles = [
  { id: 'ashish', name: 'Ashish Neupane', imageUrl: ashishProfile },
  { id: 'bipin', name: 'Bipin Gurung', imageUrl: bipinProfile },

  { id: 'sandeep', name: 'Sandeep Kaur', imageUrl: SandeepPic },
]

const ProfileModal = ({ show, handleClose, setSelectedUser }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      centered
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Choose a Profile to see the portfolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="py-4">
          <Row>
            {profiles.map((profile, index) => (
              <Col key={index} md={6} sm={12} lg={4} className="mb-4">
                <Card
                  className="profile-card h-100 cursor-pointer d-flex align-items-center p-3"
                  onClick={() => setSelectedUser(profile.id)}
                >
                  <Card.Img
                    variant="top"
                    src={profile.imageUrl}
                    className="profile-pic-modal"
                    alt={profile.name}
                  />
                  <Card.Body>
                    <Card.Title className="profile-name text-center mt-3">
                      {profile.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default ProfileModal
