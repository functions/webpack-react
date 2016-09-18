/**
 * 
 */
import * as actions from 'actions';
import Header from 'components/header/Header';


export default class App extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="pageframe-wrap">
        <Header />
        { this.props.children }
      </div>
    );
  }

  componentDidMount() {

  }

}

export default App;