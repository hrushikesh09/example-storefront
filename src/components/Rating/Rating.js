import React, {Component} from "react";
import styled from "styled-components";

const StyledStarRating = styled.img`
 height: ${props => props.isLarge ? '30px' : '15px'};
 width: ${props => props.isLarge ? '30px' : '15px'};
 `

const starSource='/assets/review/star@3x.png';
const starEmptySource='/assets/review/starEmpty@3x.png';

class Rating extends Component {

    state = {
        stars: []
    }

    handleStarRender = this.handleStarRender.bind(this);

    async componentDidMount() {
        const {rating} = this.props;
        const stars = await this.calculateStars(rating);
        if (stars) {
            this.setState({stars});
        }
    }

    handleStarRender(condition) {
        const {isLarge} = this.props;
        let starLogo;
        switch (condition) {
            case 'full':
                starLogo = (<StyledStarRating src={starSource} isLarge={isLarge}/>)
                break;
            case 'half':
                starLogo = (<StyledStarRating src={starSource} isLarge={isLarge}/>)
                break;
            case 'empty':
                starLogo = (<StyledStarRating src={starEmptySource} isLarge={isLarge}/>)
                break;
        }
        return starLogo;
    }

    calculateStars = async(rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (rating > i) {
                if ((rating - i) !== 0.5) {
                    stars.push('full')
                } else {
                    stars.push('half')
                }
            } else {
                stars.push('empty')
            }
        }
        return stars;
    }

    render() {
        const {stars} = this.state;
        return (
            <div>
                {stars.map(star => {
                    return (
                        this.handleStarRender(star)
                    )
                })}
            </div>
        )
    }
}

export default Rating
