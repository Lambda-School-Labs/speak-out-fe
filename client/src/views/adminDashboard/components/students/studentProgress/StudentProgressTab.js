import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentProgress, togglePostComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import { Progress } from 'antd';
import { Grid, Segment, Icon, Input } from 'semantic-ui-react';
import AddStudentProgressForm from './AddStudentProgressForm';
import EditStudentProgressForm from './EditStudentProgressForm'


const StudentProgressTab = props => {
    useEffect(() => {
        props.getStudentProgress(props.studentID)
    }, [])

    const [edit, setEdit] = useState(false)

    if (edit) {
        return (
            < EditStudentProgressForm {...props} setEdit={setEdit} edit={edit} />
        )
    } else if (props.progressByStudentId) {
        return (
            <div className="gridView" style={{ margin: '3%' }}>
                <Segment style={{
                    display: "flex", justifyContent: "flex-start", paddingTop: "12px",
                    border: "1px solid rgba(189, 225, 230, 0.2)",
                    height: "54px", backgroundColor: "rgba(189, 225, 230, 0.2)"
                }}>Course #: {props.progressByStudentId.course_id}
                </Segment>
                <Grid columns='equal' style={{ margin: '3%' }}>
                    <Grid.Row>
                        {/* row 1 start */}
                        <Grid.Column>
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment onClick={() => { setEdit(true) }} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} >
                                <Icon name="edit"
                                    style={{ color: "#26ABBD", cursor: "pointer" }}
                                /> Edit Report
                                </Segment>
                        </Grid.Column>

                    </Grid.Row>
                    {/*  row 2 */}
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Speaking Fluency</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.speaking_fluency * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Speaking Accuracy</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.speaking_accuracy * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Vocabulary</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.vocabulary * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Pronunciation</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.pronunciation * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Grammar</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.grammar * 10}
                                width={80}
                            />
                        </Grid.Column>

                    </Grid.Row>
                    {/* row 3 start */}
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Listening</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.listening * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Writing</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.writing * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Reading</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.reading * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Interest</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.interest * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                    {/* row 4 start */}
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Participation</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.participation * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Submitting Homework</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.submitting_homework * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Homework Effort</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.homework_effort * 10}
                                width={80}
                            />
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                    {/* row 5 start */}
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Notes</Segment>
                            <Segment>{props.progressByStudentId.notes}</Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment>Report Date</Segment>
                            <Segment>{props.progressByStudentId.report_date}</Segment>
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>


                        <Grid.Column>
                        </Grid.Column>


                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                    {/* row 6 start */}
                    <Grid.Row>

                        <Grid.Column>
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>

                        {/* segment is lined up with the others so bigger circle siz is knocking it out of line  */}
                        <Grid.Column>
                            <Segment style={{ border: '1 px solid red' }}>Overall</Segment>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.speaking_fluency * 10}
                                strokeColor='green'
                                width={200}
                            />
                        </Grid.Column>

                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                    {/* row 5 end */}

                </Grid>
            </div>
        )
    } else {
        return (
            < AddStudentProgressForm {...props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentProgressReducer.isLoading,
        progressByStudentId: state.studentProgressReducer.progressByStudentId,
        error: state.studentProgressReducer.error,
        isPosted: state.studentProgressReducer.isPosted,
        isPosting: state.studentProgressReducer.isPosting,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentProgress, togglePostComponent }
    )(StudentProgressTab)
)






