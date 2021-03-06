import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import styles from './styles'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ItemsContainer from '../../containers/ItemsContainer'
import { Grid, Typography } from '@material-ui/core'
import ItemCard from './../../components/ItemCard'
import Loading from '../../components/Loading/Loading'

const Profile = ({ classes, match }) => {
  return (
    <div className={classes.body}>
      <div>
        <ItemsContainer id={match.params.userid}>
          {({ userItemsData: { loading, error, user, viewer } }) => {
            if (loading) return <Loading />
            if (error) return 'error'
            return (
              <Grid container className={classes.root}>
                <ProfileCard user={user} />
                <Typography
                  variant="display1"
                  component="h3"
                  className={classes.itemHeader}
                >
                  <p className={classes.shared}>Shared Items</p>
                </Typography>
                <Grid container>
                  {user.items.map(item => (
                    <Grid
                      item
                      key={item.id}
                      xs={12}
                      md={6}
                      lg={4}
                      className={classes.itemCard}
                    >
                      <ItemCard item={item} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )
          }}
        </ItemsContainer>
      </div>
    </div>
  )
}

export default withStyles(styles)(Profile)
