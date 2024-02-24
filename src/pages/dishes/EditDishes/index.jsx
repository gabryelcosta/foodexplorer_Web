import { Container, Content } from './styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { useState, useEffect } from 'react';
import { useNavigation } from '../../../hooks/useNavigate';
import { SideMenu } from '../../../components/sideMenu';
import { ButtonText } from '../../../components/ButtonText';
import CaretLeft from '../../../components/Icons/CaretLeftSVG';
import { Input } from '../../../components/Input';
import { TagMarcadores } from '../../../components/TagMarcadores';
import { TextArea } from '../../../components/TextArea';
import { Button } from '../../../components/Button';
import { SelectComponent } from '../../../components/InputSelect';
import { api } from '../../../services/api';
import { useParams } from 'react-router-dom';
import { FileButton } from '../../../components/FileButton';

export function EditDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goBack } = useNavigation();
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: 'Refeicao', label: 'Refeição' },
    { value: 'Sobremesa', label: 'Sobremesa' },
    { value: 'Bebida', label: 'Bebida' },
  ];
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");
  const [displayFileName, setDisplayFileName] = useState("");
  const [fileKey, setFileKey] = useState(Math.random());
  const [image, setImage] = useState(null);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRemoveIngrediente = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
  };

  const handleAddIngrediente = () => {
    if (novoIngrediente) {
      setIngredientes([...ingredientes, novoIngrediente]);
      setNovoIngrediente("");
    }
  };

  function handleDeleteFile(){
    setImage(null);
    setDisplayFileName("");
    setFileKey(Math.random());
  }

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setImage(file);
    setDisplayFileName(file.name);

    const formData = new FormData();
    formData.append('imageFile', file);
  };

  useEffect(() => {
    // Busque os dados do prato quando a página é carregada
    api.get(`/dishes/${id}`).then(response => {
      const dishData = response.data;
      setDish(dishData);
      setName(dishData.name);
      setDescription(dishData.description);
      setSelectedOption(dishData.category);
      setIngredients(dishData.ingredients);
      setPrice(dishData.price);
      setDisplayFileName(dishData.image); // Adicione esta linha
    });
  }, [id]);

  const handleSaveChanges = () => {
    api.patch(`/dishes/${id}`, {
      name: name,
      description: description,
      category: selectedOption,
      ingredients: ingredients,
      price: price
    }).then(response => {
      // Trate a resposta da API aqui
    }).catch(error => {
      // Trate o erro aqui
    });
  };

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content>
          <div className="nav_text">
            <ButtonText icon={CaretLeft} title="voltar" onClick={goBack}/>
          </div>
            <div className="edit_content">
            <h2>Editar prato</h2>
            <div className="content_label">
              <div className="primary_information">
                <label className="upload_label">
                    <span>Imagem do prato</span>
                    <FileButton key={fileKey} onFileSelect={handleImageChange} onDeleteFile={handleDeleteFile} fileName={displayFileName}/>
                </label>
                <label className="name_label">
                  <span>Nome</span>
                  <div className="container_label">
                  <Input
                    placeholder="Ex.: Salada Ceasar"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                  </div>
                </label>
                <label className="category_label">
                  <span>Categoria</span>
                  <SelectComponent
                    value={selectedOption}
                    onChange={handleOptionChange}
                    options={options}
                  />
                </label>
              </div>
              <div className="secondary_information">
                <label className="ingredients_label">
                  <span>Ingredientes</span>
                  <div className="container_tags">
                  {ingredients.map((ingredient, index) => (
                    <TagMarcadores
                      key={index}
                      value={ingredient}
                      onRemove={() => handleRemoveIngrediente(ingredient)}
                    />
                  ))}
                  <TagMarcadores
                      isNew
                      placeholder="Novo Ingrediente"
                      value={novoIngrediente}
                      onChange={e => setNovoIngrediente(e.target.value)}
                      onClick={handleAddIngrediente}
                    />
                  </div>
                </label>
                <label>
                  <span>Preço</span>
                  <div className="container_label">
                  <Input
                    placeholder="R$ 00,00"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                  />
                  </div>
                </label>
              </div>
              <label className="textarea_label">
                <span>Descrição</span>
                <TextArea
                  placeholder="A Salada César é uma opção refrescante para o verão."
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </label>
            </div>
            <div className="btn_container">
              <Button title="Excluir prato" className="btn_remove"/>
              <Button title="Salvar alterações" className="btn_submit" onClick={handleSaveChanges}/>
            </div>
          </div>
        </Content>
      <Footer />
    </Container>
  )
}