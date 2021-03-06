import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdCloudDownload } from "react-icons/md";

import Loading from '../../components/Loading';
import Title from '../../components/Title';
import List from '../../components/List';
import Subtitle from '../../components/Subtitle';
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import ModalCreate from './components/Create';
import ModalRemove from './components/Remove';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container, Heading, ToolsContainer, Tools, Tool } from './styles';

export default function Main() {
  const [search, setSearch] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);
  const [tool, setTool] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const tools = useSelector(state => state.tools);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ToolsActions.getAllRequest());
  }, [dispatch]);

  function handleAdd(form) {
    dispatch(ToolsActions.addToolRequest(form));
    setModalCreate(false);
  }

  function handleRemove(tool) {
    dispatch(ToolsActions.removeToolRequest(tool.id));
    setModalRemove(false);
  }

  return (
    <Container>
      { !!modalCreate && (
        <ModalCreate
          onClose={setModalCreate}
          onSave={handleAdd}
          open={modalCreate}
        />
      )}

      { !!modalRemove && !!tool ? (
        <ModalRemove
          data={tool}
          onClose={() => {
            setTool(false);
            setModalRemove(false);
          }}
          onRemove={handleRemove}
          open={modalRemove}
        />
      ) : ``}

      <Heading>
        <Title size="4rem">VUTTR</Title>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
      </Heading>

      <ToolsContainer>
        <Tools>
          <Tool>
            <SearchInput tagsOnly={tagsOnly} onChange={setSearch} />
            <Checkbox onChange={setTagsOnly} text="search in tags only" />
          </Tool>
          <Button onClick={setModalCreate} icon={<MdAdd />} border text="Add" />
        </Tools>
      </ToolsContainer>

      <div className="list">
        {
          tools.loading ? (
            <Loading>
              <MdCloudDownload />
              Loading
            </Loading>
          ) : (
            <>
              {
                tools.data.map(item =>
                  <List
                    toogleModal={(tool) => {
                      setTool(tool);
                      setModalRemove(true);
                    }}
                    key={item.id}
                    data={item}
                    search={search}
                  />
                )
              }
            </>
          )
        }
      </div>
    </Container>
  );
}