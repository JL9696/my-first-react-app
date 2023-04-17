import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchString, setsearchString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString( searchString ))
    setsearchString('');
  }

  useEffect(() => { 
    dispatch(updateSearchString(''));
  }, [dispatch]);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." type="text" value={searchString} onChange={e => setsearchString(e.target.value)} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;