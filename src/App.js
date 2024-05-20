import './App.scss';
import Menu from './components/Menu';

function App()
{
return (
  <div className="App">
    <div className="component-preview">
      <h2>Menu</h2>
      <p>Style: Button</p>
      <div className="component-container">
        <Menu styleName="button">
        </Menu>
      </div>

      <p>Style: Outline</p>
      <div className="component-container">
        <Menu styleName="outline">
        </Menu>
      </div>

      <p>Style: Text</p>
      <div className="component-container">
        <Menu styleName="text">
        </Menu>
      </div>
    </div>
  </div>
);
}

export default App;
