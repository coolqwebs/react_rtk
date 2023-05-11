import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";

const Login = () => {
  const initialUserInfo = {
    email: "",
    pwd: "",
    image: "",
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(login(userInfo));
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={onInputChangeHandler}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="pwd"
            value={userInfo.pwd}
            onChange={onInputChangeHandler}
          />
          <Input
            label="Image URL Address"
            size="lg"
            type="text"
            name="image"
            value={userInfo.image}
            onChange={onInputChangeHandler}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={onSubmit}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
