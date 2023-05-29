import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./userApi";
const User = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch])
  return (
		<>
			<Container>
				<Row className="justify-content-center">
					<div className="col-md-3">
						<ul>
							<li>
								<Card className="shadow-lg">
									<img
										src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
										alt=""
									/>
									<div className="card-body text-center">
										<div className="card-title">zoynul</div>
                                        <div className="card-text">
                                            <span>Mobile: 01735361634</span><br />
                                            <span>Pabna</span>
                                        </div>
									</div>
								</Card>
							</li>
						</ul>
					</div>
				</Row>
			</Container>
		</>
	);
}

export default User