import { useEffect } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { fetchAllUsers } from "./userApi";
import { getAllusersdata } from "./userSlice";
const User = () => {
    const dispatch = useDispatch();
    const { users,loading } = useSelector(getAllusersdata);
   
    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch]);

  return (
		<>
        {loading && "<h1>Loading ...</h1>"}
			<Container>
				<Header/>
                <Row className="justify-content-center mt-5 mb-5">
                    <div className="col-md-8">
                        <Form>
                            <input placeholder="search users ..." type="text" className="form-control"/>
                        </Form>
                    </div>
                </Row>
				<Row className="justify-content-center">
					{users.length > 0
						? users.map((item, index) => {
								return (
									<>
										<div className="col-md-3" key={index}>
											<ul>
												<li>
													<Card className="shadow-lg">
														<img
															src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
															alt=""
														/>
														<div className="card-body text-center">
															{item.name && (
																<div className="card-title">{item.name}</div>
															)}

															<div className="card-text">
																{item.phone && (
																	<>
																		<span>Mobile: {item.phone}</span>
																		<br />
																	</>
																)}
																{item.location && <span>{item.location}</span>}
															</div>
														</div>
                                                        <div className="card-footer text-center">
                                                            <Button>Follow</Button>
                                                        </div>
													</Card>
												</li>
											</ul>
										</div>
									</>
								);
					})
						: "No users"}
				</Row>
			</Container>
		</>
	);
}

export default User