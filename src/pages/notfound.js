import { useNavigate } from "react-router";

export default function NotFound(){
    const navigate = useNavigate();
    navigate("/")
}