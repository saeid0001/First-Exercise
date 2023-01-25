import { BackgroundImage , CategoryBodyContainer , CategoryContainer } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom'

const Directorytem = ({ category }) => {
  const { imageUrl, title , route } = category;

  const navigation = useNavigate() ;

  const HanfelNavigation = () => navigation(route)

  return (
    <CategoryContainer onClick={HanfelNavigation}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Directorytem;