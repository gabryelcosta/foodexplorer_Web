import { Container } from './styles';

export function Profile(){
  return(
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
        <h2>Novo prato</h2>
        <label>
            <span>Imagem do prato</span>
            <Button>
              <UploadSVG />
              <span>Selecione imagem</span>
            </Button>
        </label>
        <label>
          <span>Nome</span>
          <div className="container_label">
            <Input
              placeholder="Ex.: Salada Ceasar"
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
              placeholder="R$ 00,00"
            />
          </div>
        </label>
        <label>
          <span>Descrição</span>
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </label>
        <div className="btn_container">
          <Button title="Salvar alterações" className="btn_submit"/>
        </div>
      </div>
    </Content>
  <Footer />
</Container>
)
}