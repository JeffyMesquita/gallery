import { Container } from './styles';

type Props = {
  url: string;
  name: string;
}

const PhotoItem = ({ url, name }: Props) => {
  return(
    <Container>
      ...
    </Container>
  );
};

export default PhotoItem;