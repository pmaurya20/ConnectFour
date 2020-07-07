import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import Button from '../buttons/button';
import User from '../../assets/images/one.png';
import MultiUser from '../../assets/images/two.png';
import Online from '../../assets/images/online.png';
import Training from '../../assets/images/training.png';
import Modal from '../modal/modal';
import Container from 'react-bootstrap/Container';
import List from '../list/list';
import Icon1 from '../../assets/images/avatar01.png';
import Icon2 from '../../assets/images/avatar02.png';
import Icon3 from '../../assets/images/winner.png';
import Icon4 from '../../assets/images/run.png';
import './mainPageActions.css';
import SubList from '../list/subList/subList';
import Board from '../board/board';

class PageActions extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.SubmitSubModal = this.SubmitSubModal.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
    this.photoUpload = this.photoUpload.bind(this);
    this.endTournament = this.endTournament.bind(this);
  }

  // Intial State
  get initialState() {
    return {
      custom: false,
      two: false,
      online: false,
      training: false,
      onlineSubModal: false,
      trainingSubModal: false,
      showGame: false,
      inputValueP1: 'David',
      inputValueP2: 'Maria',
      file: '',
      imagePreviewUrl: Icon1,
      imagePreviewUrl1: Icon2,
      radioCheckedLabel: '2 Game',
      radioChecked: '',
      radioCheckedLabelTurn: 'Alternative turn',
      radioCheckedTurn: ''
    };
  }

  // Submit Sub Modal
  SubmitSubModal = () => {
    this.setState({ onlineSubModal: false, trainingSubModal: false });
  }

  // Submit Form
  SubmitForm = () => {
    this.setState({ showGame: true, two: true });
  }

  // Player 1 Input Change
  onInputChangeHandler = (event) => {
    this.setState({ inputValueP1: event.target.value });
  }

  // Player 2 Input Change
  onInputChangeHandler2 = (event) => {
    this.setState({ inputValueP2: event.target.value });
  }

  // Image Uplaod for Player 1
  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  // Image Uplaod for Player 2
  photoUpload1 = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl1: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  // Radio Check for No. of games
  handleCheck = (event) => {
    this.setState({
      radioCheckedLabel: event.target.value,
      radioChecked: event.target.checked
    })
  }

  // Radio Check for player turn
  handleCheckTurn = (event) => {
    this.setState({
      radioCheckedLabelTurn: event.target.value,
      radioCheckedTurn: event.target.checked
    })
  }

  // End Tournament
  endTournament = () => {
    this.setState(this.initialState);
  }

  // Hide Modal
  hideModal = () => {
    debugger
    if (this.state.showGame) {
      this.setState({ showGame: false });
    } else {
      this.setState({ two: false });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={6} sm={12} className="mb-3">
            <Button variant="btn-primaryBlue" click={() => this.setState({ custom: true })}><img src={User} alt="User" /> Custom Game</Button>
          </Col>

          <Col md={6} sm={12} className="mb-3">
            <Button variant="btn-primaryDarkBlue" click={() => this.setState({ two: true })}><img src={MultiUser} alt="User" /> Two Players</Button>
          </Col>

          <Col md={6} sm={12} className="mb-md-0 mb-3">
            <Button variant="btn-primaryLightPurple" click={() => this.setState({ online: true })}><img src={Online} alt="User" /> Game Online</Button>
          </Col>

          <Col md={6} sm={12}>
            <Button variant="btn-primaryPurple" click={() => this.setState({ training: true })}><img src={Training} alt="User" /> Training Game</Button>
          </Col>
        </Row>

        {/* Custom Game Modal */}
        <Modal
          show={this.state.custom}
          onHide={() => this.setState({ custom: false })}
          type="fullModal"
          title="Custom Game">Coming Soon</Modal>

        {/* Two Players Game Modal */}
        <Modal
          show={this.state.two}
          onHide={this.hideModal}
          type="fullModal"
          title="Two Players Game">
          {this.state.showGame ?
            <Container className="gameContainer">
              <Board
                inputValueP1={this.state.inputValueP1}
                inputValueP2={this.state.inputValueP2}
                imagePreview1={this.state.imagePreviewUrl}
                imagePreview2={this.state.imagePreviewUrl1}
                endTourClick={this.endTournament}></Board>
            </Container> :

            <Container>
              {/* Game */}
              <div className="twoPlayers">
                <ul>
                  <List
                    status="green-list"
                    fileType="User1"
                    subText="Player 01"
                    inputName="Player Name"
                    inputValue={this.state.inputValueP1}
                    change={this.onInputChangeHandler}
                    imageChange={this.photoUpload}
                    imagePreview={this.state.imagePreviewUrl}>
                  </List>
                  <List
                    status="orange-list"
                    fileType="User2"
                    subText="Player 02"
                    inputName="Player Name"
                    inputValue={this.state.inputValueP2}
                    change={this.onInputChangeHandler2}
                    imageChange={this.photoUpload1}
                    imagePreview={this.state.imagePreviewUrl1}>
                  </List>
                  <List
                    status="grey-list"
                    subText="Number of game"
                    inputName="Number of game"
                    inputValue={this.state.radioCheckedLabel}
                    click={() => this.setState({ onlineSubModal: true })}
                    imagePreview={Icon3} fileHidden>
                  </List>
                  <List
                    status="grey-list"
                    subText="Who starts"
                    inputName="Who starts"
                    inputValue={this.state.radioCheckedLabelTurn}
                    click={() => this.setState({ trainingSubModal: true })}
                    imagePreview={Icon4} fileHidden>
                  </List>
                </ul>
                <div className="actionWrap">
                  <Button variant="btn-primaryDarkBlue" align="center" click={this.SubmitForm}>Start Game</Button>
                </div>
              </div>
            </Container>
          }

        </Modal>

        {/* Game Online Modal */}
        <Modal
          show={this.state.online}
          onHide={() => this.setState({ online: false })}
          type="fullModal"
          title="Game Online">Coming Soon</Modal>

        {/* Game Online Sub Modal */}
        <Modal
          show={this.state.onlineSubModal}
          type="gameModal"
          onHide={() => this.setState({ onlineSubModal: false })}
          title="Number of game" centered="centered" footer={this.SubmitSubModal}>
          <ul>
            <SubList listId="TwoGames" inputName="Game Count" label="2 Games" radioChange={e => this.handleCheck(e)} />
            <SubList listId="ThreeGames" inputName="Game Count" label="3 Games" radioChange={e => this.handleCheck(e)} />
            <SubList listId="FourGames" inputName="Game Count" label="4 Games" radioChange={e => this.handleCheck(e)} />
            <SubList listId="FiveGames" inputName="Game Count" label="5 Games" radioChange={e => this.handleCheck(e)} />
          </ul>
        </Modal>


        {/* Training Game Modal */}
        <Modal
          show={this.state.training}
          onHide={() => this.setState({ training: false })}
          type="fullModal"
          title="Training Game">Coming Soon</Modal>

        {/* Training Game Sub Modal */}
        <Modal
          show={this.state.trainingSubModal}
          type="gameModal"
          onHide={() => this.setState({ trainingSubModal: false })}
          title="Who starts" centered="centered" footer={this.SubmitSubModal}>
          <ul>
            <SubList listId="Alternative" inputName="Who Starts" label="Alternative turn" radioChange={e => this.handleCheckTurn(e)} />
            <SubList listId="Losser" inputName="Who Starts" label="Looser first" radioChange={e => this.handleCheckTurn(e)} />
            <SubList listId="Winner" inputName="Who Starts" label="Winner first" radioChange={e => this.handleCheckTurn(e)} />
            <SubList listId="PlayerOne" inputName="Who Starts" label="Always player 01" radioChange={e => this.handleCheckTurn(e)} />
            <SubList listId="PlayerTwo" inputName="Who Starts" label="Always player 02" radioChange={e => this.handleCheckTurn(e)} />
          </ul>
        </Modal>
      </div>
    )
  }
}

export default PageActions;