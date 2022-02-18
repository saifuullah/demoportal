import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';



export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            REJECTED 
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            4
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <ThumbDownOffAltIcon />
          </Avatar>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
);
