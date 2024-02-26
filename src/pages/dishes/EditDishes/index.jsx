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
import { Notification } from '../../../components/Notification';


export function EditDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goBack } = useNavigation();
  const [selectedOption, setSelectedOption] = useState("");
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");
  const [displayFileName, setDisplayFileName] = useState("");
  const [fileKey, setFileKey] = useState(Math.random());
  const [image, setImage] = useState(null);
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

  const handleDeleteDish = () => {
    api.delete(`/dishes/${id}`)
      .then(() => {
        // Trate a resposta da API aqui. Por exemplo, você pode redirecionar o usuário para outra página
        goBack();
      })
      .catch(error => {
        // Trate o erro aqui
        console.error(error);
      });
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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

  useEffect(() => {
    // Busque os dados do prato quando a página é carregada
    api.get(`/dishes/${id}`).then(response => {
      const dishData = response.data;
      setDish(dishData);
      setName(dishData.name);
      setDescription(dishData.description);
      setSelectedOption(dishData.category);
      setIngredientes(dishData.ingredients);
      setPrice(dishData.price);
      setDisplayFileName(dishData.image);
    });
  }, [id]);

  const handleSaveChanges = () => {

    const fields = {
      'nome': { value: name, message: 'Por favor, preencha o campo nome antes de atualizar o prato' },
      'opção selecionada': { value: selectedOption, message: 'Por favor, selecione uma opção antes de atualizar o prato' },
      'preço': { value: price, message: 'Por favor, preencha o campo preço antes de atualizar o prato' },
      'descrição': { value: description, message: 'Por favor, preencha o campo descrição antes de atualizar o prato' },
      'ingredientes': { value: ingredientes.length > 0, message: 'Por favor, adicione pelo menos um ingrediente antes de atualizar o prato' },
      'imagem': { value: displayFileName, message: 'Por favor, selecione uma imagem antes de atualizar o prato.' },
    };

    const areAllFieldsEmpty = Object.values(fields).every(field => !field.value);

    if (areAllFieldsEmpty) {
      showNotification('Por favor, preencha todos os campos antes de atualizar o prato.', "warning");
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
    formData.append('description', description);
    formData.append('category', selectedOption);
    formData.append('ingredients', JSON.stringify(ingredientes));
    formData.append('price', price);
    if (image) {
      formData.append('imageFile', image);
    }

    api.patch(`/dishes/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      showNotification('Alterações salvas com sucesso!', "success");
    }).catch(error => {
      showNotification('Ocorreu um erro ao salvar as alterações. Por favor, tente novamente.', "error");
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
                    ingredientes={ingredientes} // Adicione esta linha
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
              <Button title="Excluir prato" className="btn_remove" onClick={handleDeleteDish}/>
              <Button title="Salvar alterações" className="btn_submit" onClick={handleSaveChanges}/>
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