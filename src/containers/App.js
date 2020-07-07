import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Container from 'react-bootstrap/Container';
import Banner from '../components/banner/banner';
import PageAction from '../components/mainPageActions/mainPageActions';
import Section from '../components/HOC/section/section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <div className="page-content">
            <div className="main-content">
              {/* Banner */}
              <Section>
                <Banner />
              </Section>
            
              {/* Page Action Buttons */}
              <Section>
                <PageAction />
              </Section>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
