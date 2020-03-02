import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Senpai!</h4>
                    Notice me?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 16:45"
                    content="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 02:00"
                    content="How insightful." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 17:00"
                    content="Nothing, but wisdom." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));