import React, {Component} from 'react';
import UriBox from '../../Components/UriBox/uriBox';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import "./GridApp.css";

export default class GridApp extends Component{
    state={
        showApp: false,
        boxArray: [{Type:"", Title:"", URL:""}]
    }

    toggleMainApp = ()=>{
        this.setState(prevState=>({...this.state.showApp, showApp: !prevState.showApp}));
        if(this.state.boxArray.length===0){
            this.setState({
              boxArray:[Object.create({ Type: "", Title: "", URL: "" })]
            });
        }
    }

    changeType = (event,index)=>{
        let cpyboxArray = [...this.state.boxArray];
        cpyboxArray[index].Type = event.target.value;
        console.log(index);
        this.setState({boxArray: cpyboxArray});
    };

    changeTitle = (event,index)=>{
        let cpyboxArray = [...this.state.boxArray];
        cpyboxArray[index].Title = event.target.value;
        console.log(index);
        this.setState({boxArray: cpyboxArray});
    };

    changeURL = (event,index)=>{
        let cpyboxArray = [...this.state.boxArray];
        cpyboxArray[index].URL = event.target.value;
        console.log(index);
        this.setState({boxArray: cpyboxArray});
    };

    addCard = ()=>{
        let currBoxArr = [...this.state.boxArray];
        currBoxArr = currBoxArr.concat(Object.create({Type:"", Title:"", URL:""}));
        console.log(currBoxArr);
        // this.setState({boxArray: currBoxArr});
        this.setState({boxArray: currBoxArr});
    };

    deleteCard = (index)=>{
        console.log(index);
        let currArr = [...this.state.boxArray];
        currArr = currArr.filter(ele => ele!==currArr[index]);
            if (this.state.boxArray.length === 1) {
            this.setState({
              showApp: false
            });
            }
        this.setState({boxArray: currArr});
    };

    render(){
        return (
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  className="light"
                  onClick={() => this.toggleMainApp()}
                  variant="light"
                >
                  Add
                </Button>
              </Col>
              <Col md={{ span: 6, offset: 3 }}>
                {this.state.showApp ? (
                  <Card style={{ margin: "5px" }}>
                    {this.state.boxArray.map((obj, index) => {
                      return (
                        <UriBox
                          key={index}
                          boxKey={index}
                          Values={{ ...obj }}
                          changeType={(event, index) =>
                            this.changeType(event, index)
                          }
                          changeTitle={(event, index) =>
                            this.changeTitle(event, index)
                          }
                          changeURL={(event, index) =>
                            this.changeURL(event, index)
                          }
                          deleteCard={() => this.deleteCard(index)}
                        />
                      );
                    })}
                    {this.state.boxArray.length!==0?<Button
                      variant="success"
                      className="success"
                      onClick={() => this.addCard()}
                    >
                      <strong>+</strong>
                    </Button>:null}
                  </Card>
                ) : null}
              </Col>
            </Row>
          </Container>
        );
    }
}
