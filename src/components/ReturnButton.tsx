import './ReturnButton.css';

export const ReturnButton = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
    <div className="return-button" onClick={handleClick}>
        <span className="material-icons">arrow_upward</span>
    </div>
    )
};