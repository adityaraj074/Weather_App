import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}) {
    const INIT_URL ="data:image/jpeg;base64,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"
    
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {InfoBox.weather}</h1>
            <div className='cardcontent'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       <p>Temperature = {info.temp}</p>
                       <p>Humidity = {info.humidty}</p>
                       <p>Min Temp = {info.tempMin}&deg;C</p>
                       <p>Max Temp= {info.tempMax}&deg;C</p>
                       The weather can be described as ${info.weather} and feels like {info.feelsLike}&deg;C
                    </Typography>
                </CardContent> 
            </Card>
            </div>
        </div>
    );
}