'use strict';

const e = React.createElement;

class ClasePresionaBoton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cliqueado: false };
  }

  render() {
    if (this.state.cliqueado) {
      return 'Oh, si lo presionaste!!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ cliqueado: true }) },
      'Presioname'
    );
  }
}

const DivContenedor = document.querySelector('#unDiv');
ReactDOM.render(e(ClasePresionaBoton), DivContenedor);