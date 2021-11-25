import gir from './imagesrc/girlssrc.jpg';
import fa from './imagesrc/fasrc.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Menu,Form, Input, Button, Card, Image, Container } from 'semantic-ui-react'

function App() {
  const f1List = [{ nom: "faicel", prenom: "bendawed" ,num:"1"}, { nom: "ghada", prenom: "khaldi", num:"2"},
  { nom: "haifa", prenom: "rjab", num:"3"}, { nom: "ameni", prenom: "isawi", num:"4"},
  { nom: "abed al hfidh", prenom: "ben salem", num:"5"},{ nom: "hamza", prenom: "lboss" ,num:"6"}]

  return (
    <div className="App" >
      
      <div className="nav">
        <Menu pointing>
          <a href="top">
          <Menu.Item
            name='home'
          />
          </a>
          <a href="#des">
          <Menu.Item
            name='description'
          />
          </a>
          <a href="#hel">
          <Menu.Item
            name='help'
          />
          </a>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      
      <div className="contain">
        {f1List.map(el => <Card className="con">
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={gir}
            />
            <Card.Header>{el.nom + " " + el.prenom}</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              <strong>vesitor N°{el.num}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                suivie
              </Button>
              <Button basic color='red'>
                zap
              </Button>
            </div>
          </Card.Content>
        </Card>)}
      </div><br/><br/>
      <a id="des"></a>
      <Container>
        <strong>Description</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        
      </Container><br/><br/>
      <div className="bb">
      <strong>Helps</strong>
      <a name="hel"></a>
      <Form className="kk">
        <Form.Group widths='equal'>
          <Form.Input fluid label='name' placeholder='name' />
          <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      
      
    />
        </Form.Group>
        <Form.Group inline>
        </Form.Group>
        <Form.TextArea label='alert' placeholder='Tell us more about your problem...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    
      </div>

      
    </div>
  );
}

export default App;
