import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { useNavigation } from '../../hooks/useNavigate';
import { SideMenu } from '../../components/sideMenu';
import { ButtonText } from '../../components/ButtonText';
import CaretLeft from '../../components/Icons/CaretLeftSVG';
import { Input } from '../../components/Input';
import UploadSVG from '../../components/Icons/UploadSVG';
import { TagMarcadores } from '../../components/TagMarcadores';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { SelectComponent } from '../../components/InputSelect';

export function EditDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goBack } = useNavigation();
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: 'Refeicao', label: 'Refeição' },
    { value: 'PratoPrincipal', label: 'Prato Principal' },
    { value: 'Sobremesa', label: 'Sobremesa' },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
          <div className="edit_contet">
            <h2>Editar prato</h2>
            <label>
                <span>Imagem do prato</span>
                <Button>
                  <UploadSVG />
                  <span>Selecione imagem para alterá-la</span>
                </Button>
            </label>
            <label>
              <span>Nome</span>
              <div className="container_label">
                <Input
                  value="Salada César"
                />
              </div>
            </label>
            <label>
              <span>Categoria</span>
              <SelectComponent value={selectedOption} onChange={handleOptionChange} options={options} />
            </label>
            <label>
              <span>Ingredientes</span>
              <div className="container_tags">
                <TagMarcadores
                  value="Pão Naan"
                />
                <TagMarcadores
                  isNew
                  placeholder="Nova Tag"
                />
              </div>
            </label>
            <label>
              <span>Preço</span>
              <div className="container_label">
                <Input
                  value="R$ 40,00"
                />
              </div>
            </label>
            <label>
              <span>Descrição</span>
              <TextArea
                value="A Salada César é uma opção refrescante para o verão."
              />
            </label>
            <div className="btn_container">
              <Button title="Excluir prato" className="btn_remove"/>
              <Button title="Salvar alterações" className="btn_submit"/>
            </div>
          </div>
        </Content>
      <Footer />
    </Container>
  )
}