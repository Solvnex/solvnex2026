import { Stack, Card, Typography, Grid, Rating, Avatar } from '@mui/material';

const testimonialData = [
  {
    content:
      'This platform streamlined hiring process for gig, saving us time and money, with responsive support and a user-friendly dashboard that simplifying documentation works.',
    name: 'EROTA',
    profession: 'Business Team',
    rating: 5,
  },
  {
    content:
      'Using Solvnex helps me to get extra income by working from home. Easy to upload documents in the platform and chat with Project Owner.',
    name: 'Hj. Jamaludin',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content: 'Friendly support and interesting platform of making side income.',
    name: 'Amran Sharif',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content:
      'Like the simplification of the whole hiring process right from talent searching where matching is based on the criteria until the payment delivery. Efficient way to conduct assessment based jobs.',
    name: 'Task Owner',
    profession: 'Job Poster',
    rating: 5,
  },
  {
    content: 'Solvnex helps me get my perfect freelance job!',
    name: 'Mr. Bornface Millis',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content: 'Solvnex helps me get my perfect freelance job!',
    name: 'Mr. Bornface Millis',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content: 'Solvnex helps me get my perfect freelance job!',
    name: 'Mr. Bornface Millis',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content: 'Solvnex helps me get my perfect freelance job!',
    name: 'Mr. Bornface Millis',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content: 'Solvnex helps me get my perfect freelance job!',
    name: 'Mr. Bornface Millis',
    profession: 'Gig Professional',
    rating: 5,
  },
  {
    content: 'Solvnex helps me get my perfect freelance job!',
    name: 'Mr. Bornface Millis',
    profession: 'Gig Professional',
    rating: 5,
  },
];

const TestimonyCard = () => {
  const numberOfCardsToShow = 3;

  return (
    <Grid container spacing={2}>
      {testimonialData
        .slice(0, numberOfCardsToShow)
        .map((testimonial, index) => (
          <Grid item xs={12} sm={12} md={4} key={index} sx={{ gap: '30px' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'start',
                padding: '20px',
                minWidth: { xs: '100%', md: '400px' },
                height: { xs: 'auto', md: '193px' },
                background: '#ededed',
                boxShadow: 'none',
                borderRadius: '10px',
                gap: { xs: '10px' },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#212020',
                }}
              >
                {testimonial.content}
              </Typography>
              <Stack
                sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                }}
              >
                {testimonial.profileImage ? (
                  <Avatar
                    src={testimonial.profileImage}
                    alt={`Profile of ${testimonial.name}`}
                    sx={{
                      marginRight: '10px',
                      width: '40px',
                      height: '40px',
                      background: '#fff',
                    }}
                  />
                ) : (
                  <Avatar
                    sx={{
                      marginRight: '10px',
                      width: '40px',
                      height: '40px',
                      color: '#000',
                    }}
                  />
                )}
                <Stack
                  sx={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'start',
                    gap: '6px',
                    marginRight: '50px',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: '18px',
                      color: '#212020',
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      color: '#212020',
                    }}
                  >
                    {testimonial.profession}
                  </Typography>
                </Stack>
                <Rating value={testimonial.rating || 0} readOnly />
              </Stack>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default TestimonyCard;
