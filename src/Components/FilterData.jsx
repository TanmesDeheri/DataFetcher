import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {React,useState} from 'react'

export default function FilterData({data,recieveNewdata}) {
    const [searchData, setsearchData] = useState('')
const handleSearch=(event)=>{
    event.preventDefault()
    const filteredData=data.filter((item) => {
        return item.name.toLowerCase().includes(searchData.toLowerCase());
      });
      recieveNewdata(filteredData)
}
    return (
        <div>
            <Form>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Search
                        </Form.Label>
                        <Form.Control id="inlineFormInputName" placeholder="Search by" value={searchData} onChange={(e)=>{setsearchData(e.target.value)}}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="button" onClick={handleSearch}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}