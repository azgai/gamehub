import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>Game Hub</h1>
            <p>Select a game</p>

            <div className="games">
                <Link to="/tic-tac-toe">
                    <button>Tic Tac Toe</button>
                </Link>

                <Link to="/memory-game">
                    <button>Memory Game</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;