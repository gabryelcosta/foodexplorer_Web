import { Container, Content } from './styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { useState } from 'react';
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
import { FileButton } from '../../../components/FileButton';
import { Notification } from '../../../components/Notification';

export function NewDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goToHomePage } = useNavigation();
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");
  const [displayFileName, setDisplayFileName] = useState("");
  const [fileKey, setFileKey] = useState(Math.random());
  const [notification, setNotification] = useState(null);
  const options = [
    { value: 'Refeicao', label: 'Refeição' },
    { value: 'Sobremesa', label: 'Sobremesa' },
    { value: 'Bebida', label: 'Bebida' },
  ];

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRemoveIngrediente = (ingredienteToRemove) => {
    setIngredientes(ingredientes.filter(ingrediente => ingrediente !== ingredienteToRemove));
  };

  const handleAddIngrediente = (event) => {
    event.preventDefault();
    if (novoIngrediente) {
      setIngredientes([...ingredientes, novoIngrediente]);
      setNovoIngrediente("");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fields = {
      'nome': { value: name, message: 'Por favor, preencha o campo nome antes de cadastrar um novo prato' },
      'opção selecionada': { value: selectedOption, message: 'Por favor, selecione uma opção antes de cadastrar um novo prato' },
      'preço': { value: price, message: 'Por favor, preencha o campo preço antes de cadastrar um novo prato' },
      'descrição': { value: description, message: 'Por favor, preencha o campo descrição antes de cadastrar um novo prato' },
      'ingredientes': { value: ingredientes.length > 0, message: 'Por favor, adicione pelo menos um ingrediente antes de cadastrar um novo prato' },
      'imagem': { value: image, message: 'Por favor, selecione uma imagem antes de cadastrar um novo prato' },
    };

    const areAllFieldsEmpty = Object.values(fields).every(field => !field.value);

    if (areAllFieldsEmpty) {
      showNotification('Por favor, preencha todos os campos antes de cadastrar um novo prato', "warning");
      return;
    }

    for (let fieldName in fields) {
      if (!fields[fieldName].value) {
        showNotification(fields[fieldName].message, "warning");
        return;
      }
    }

    const formData = new FormData();

    formData.append('name', name);
    formData.append('category', selectedOption);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('ingredients', JSON.stringify(ingredientes));

    formData.append('imageFile', image);

    try {
      await api.post('/dishes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      showNotification('Prato cadastrado com sucesso!', "success");
      setSelectedOption("");
      setName("");
      setPrice("");
      setDescription("");
      setIngredientes([]);
      setNovoIngrediente("");
      setImage(null);
      setDisplayFileName("");
      setFileKey(Math.random());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content onSubmit={handleSubmit}>
          <div className="nav_text">
            <ButtonText icon={CaretLeft} title="voltar" onClick={goToHomePage}/>
          </div>
          <div className="new_content">
            <h2>Novo prato</h2>
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
                  <SelectComponent value={selectedOption} onChange={handleOptionChange} options={options} />
                </label>
              </div>
              <div className="secondary_information">
                <label className="ingredients_label">
                  <span>Ingredientes</span>
                  <div className="container_tags">
                    {ingredientes.map((ingrediente, index) => (
                      <TagMarcadores
                        key={index}
                        value={ingrediente}
                        onRemove={() => handleRemoveIngrediente(ingrediente)}
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
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </label>
            </div>
            <div className="btn_container">
              <Button type="submit" title="Salvar prato" className="btn_submit"/>
            </div>
          </div>
        </Content>
      <Footer />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
          />
        )}
    </Container>
  )
}