import React from 'react'
import { Grow, Container, Grid } from '@material-ui/core'



import ProductsAdmin from '../../components/admin/ProductsAdmin'
import AdminForm from './AdminForm'


export default function AdminPage({ currentId, setCurrentId }) {

    return(<>
        <Container maxWidth="lg">
            <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductsAdmin setCurrentId={setCurrentId} />
                </Grid>  
                <Grid item xs={12} sm={4}>
                    <AdminForm currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                </Grid>
            </Container>
            </Grow>
        </Container>
        </>
    )
}

