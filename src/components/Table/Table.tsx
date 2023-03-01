import { ChangeEvent, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContextsField } from "../../contexts/Auth/ContextsField";

export const Table: any = () => {
  const auth = useContext(ContextsField);
  const navigate = useNavigate();

  const userName = localStorage.getItem("authName");
  const userToken = localStorage.getItem("authToken");

  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");

  const handleDescriptionInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleDetailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail(event.target.value);
  };

  async function handleCreateTask() {
    setDescription(description);
    setDetail(detail);
    await auth.createTask(description, detail);
    navigate("/private");
  }

  function voltar() {
    navigate("/private");
  }

  return (
    <>
      <div className='container mt-5 rounded-4 shadow'>
        <div className='row bg-white rounded-4 align-items-md-stretch'>
          <header className='container-fluid bg-white rounded-4'>
            <div className=''>
              <h1 className='fw-bold text-center p-2'>Meus Recados</h1>
              <h2 className='text-center p-2'>Bem vindo</h2>
            </div>
          </header>
        </div>
      </div>
      <div className='container shadow'>
        <Form
          className='row  mt-2 bg-white rounded-4'
          onSubmit={handleCreateTask}
        >
          <Form.Group className='col-12 col-sm-12 m-1'>
            <Form.Control
              type='text'
              placeholder='Descrição'
              name='description'
              onChange={handleDescriptionInput}
            />
          </Form.Group>
          <Form.Group className='col-12 col-sm-12 m-1'>
            <Form.Control
              type='text'
              placeholder='Detalhamento'
              name='detail'
              onChange={handleDetailInput}
            />
          </Form.Group>
          <Form.Group className='row m-1'>
            <Button
              className=' btn col-12 col-sm-2 m-1'
              variant='success'
              type='submit'
            >
              Salvar
            </Button>
            <Button
              className=' btn col-12 col-sm-2 m-1'
              variant='primary'
              onClick={voltar}
            >
              Voltar
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
