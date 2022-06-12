import { Button } from "react-bootstrap";
import { useContext } from 'react'
import { UserAuthContext } from "../context/UserAuthContext";
import { toast } from "react-toastify";


const Home = () => {
  const { user, logout } = useContext(UserAuthContext)
  const handleClick = async () => {
    try {
      await logout()
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome {user && user.email} <br />
      </div>
      <div className="d-grid gap-2">
        <img style={{ margin: 'auto', padding: '20px', border: '2px solid black' }} src={user.photoURL} alt="photo url" />
        <Button variant="primary" onClick={handleClick}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
