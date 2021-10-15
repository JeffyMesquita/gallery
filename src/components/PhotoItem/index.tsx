import { Container } from './styles';

type Props = {
  url: string;
  name: string;
}

export const PhotoItem = ({ url, name }: Props) => {
  return(
    <Container>
      <img src={url} alt={name} />
      {name}
    </Container>
  );
};

