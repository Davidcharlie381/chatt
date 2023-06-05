import { Link } from "react-router-dom";

export default function Home({ name, setName }) {
  return (
    <div className="bg-gray-800 text-gray-200 h-screen text-center">
      <h1 className="text-center font-bold text-4xl pt-20">Hi, there!</h1>
      <p className="m-5">
        Welcome to your world of imaginations. Sadly, it's only ephemereal and
        we can't do anything about your single situation.
      </p>
      <p className="m-3">Enter your crush's name below: </p>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          required
          value={name}
          placeholder="Amarachi"
          onChange={(e) => setName(e.target.value)}
          className="p-3 px-5 rounded-lg text-gray-800"
        />
        <Link to="chat">
          <button className="bg-blue-500 mt-4 p-3 rounded-md">
            Proceed to Chat
          </button>
        </Link>
      </form>
    </div>
  );
}
