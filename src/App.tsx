import { useState, useEffect } from 'react';
import { Container, Area, Header, ScreenWarning, PhotoList } from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem/index';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, [])

  return(
    <Container>
      <Area>
        <Header>
          Galeria de Fotos
        </Header>

        {/* Area de upload */}

        {loading && 
          <ScreenWarning>
            <div className="emoji">✋</div>
            <div>Carregando...</div>
          </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <PhotoList>
            {photos.map((item, index)=> (
              <PhotoItem.PhotoItem 
                key={index} 
                url={item.url}
                name={item.name}
              />
            ))}
          </PhotoList>
        }

        {!loading && photos.length === 0 && 
          <ScreenWarning>
          <div className="emoji">😢</div>
          <div>Nao ha fotos cadastradas</div>
        </ScreenWarning>
        }

      </Area>
    </Container>
  );
};

export default App;