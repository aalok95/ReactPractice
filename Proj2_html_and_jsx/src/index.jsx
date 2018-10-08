class Greetings extends React.Component
{   
    constructor() {
        super();
        console.log("Hi! I am here...");
    }
    render()
    {   
        return (
            <h1>Greetings, {this.props.name}!</h1>
        );    
    }
}
ReactDOM.render(
    <Greetings name="Chris" />,
    document.getElementById('root')
);