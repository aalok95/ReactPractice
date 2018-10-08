class App extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div>
                <h1>News: </h1>
                <br />
                <News />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);