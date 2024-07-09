import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';
import useTranslation from 'next-translate/useTranslation';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: PaletteColorOptions;
  }
  interface PaletteOptions {
    customColor: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    customColor: {
      main: 'rgb(121, 89, 19)',
      contrastText: '#000',
    },
  },
});

interface IFormInput {
  email: string;
  message: string;
  sessionType: string;
  name: string;
  birthdate: string;
  birthtime: string;
  birthplace: string;
  partnerName?: string;
  partnerBirthdate?: string;
  partnerBirthtime?: string;
  partnerBirthplace?: string;
}

const EmailForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>({ defaultValues: { sessionType: 'single' } });
  const { t } = useTranslation('contactForm');
  const [responseMessage, setResponseMessage] = React.useState<string>('');

  const sessionType = watch('sessionType');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await fetch('/api/submit-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setResponseMessage(result.message);
  };

  return (
    <Box component="div" sx={{ mt: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mb: 2, maxWidth: 300 }}>
          <FormControl fullWidth size='small'>
            <InputLabel id="session-type-label">{t('sessionType')}</InputLabel>
            <Select
              labelId="session-type-label"
              label={t('sessionType')}
              defaultValue="single"
              {...register('sessionType', { required: `${t('sessionType')} ${t('required')}` })}
              error={!!errors.sessionType}
            >
              <MenuItem value="single">{t('individualSession')}</MenuItem>
              <MenuItem value="couple">{t('synastrySession')}</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {sessionType && (
          <>
            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('name')}
                variant="outlined"
                {...register('name', { required: `${t('name')} ${t('required')}` })}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
              />
            </Box>

            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('birthdate')}
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true }}
                {...register('birthdate', { required: `${t('birthdate')} ${t('required')}` })}
                error={!!errors.birthdate}
                helperText={errors.birthdate ? errors.birthdate.message : ''}
              />
            </Box>

            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('birthtime')}
                variant="outlined"
                type="time"
                InputLabelProps={{ shrink: true }}
                {...register('birthtime', { required: `${t('birthtime')} ${t('required')}` })}
                error={!!errors.birthtime}
                helperText={errors.birthtime ? errors.birthtime.message : ''}
              />
            </Box>

            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('birthplace')}
                variant="outlined"
                {...register('birthplace', { required: `${t('birthplace')} ${t('required')}` })}
                error={!!errors.birthplace}
                helperText={errors.birthplace ? errors.birthplace.message : ''}
              />
            </Box>
          </>
        )}

        {sessionType === 'couple' && (
          <>
            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('partnerName')}
                variant="outlined"
                {...register('partnerName', { required: `${t('partnerName')} ${t('required')}` })}
                error={!!errors.partnerName}
                helperText={errors.partnerName ? errors.partnerName.message : ''}
              />
            </Box>

            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('partnerBirthdate')}
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true }}
                {...register('partnerBirthdate', { required: `${t('partnerBirthdate')} ${t('required')}` })}
                error={!!errors.partnerBirthdate}
                helperText={errors.partnerBirthdate ? errors.partnerBirthdate.message : ''}
              />
            </Box>

            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('partnerBirthtime')}
                variant="outlined"
                type="time"
                InputLabelProps={{ shrink: true }}
                {...register('partnerBirthtime', { required: `${t('partnerBirthtime')} ${t('required')}` })}
                error={!!errors.partnerBirthtime}
                helperText={errors.partnerBirthtime ? errors.partnerBirthtime.message : ''}
              />
            </Box>

            <Box sx={{ mb: 2, maxWidth: 300 }}>
              <TextField
                fullWidth
                size='small'
                label={t('partnerBirthplace')}
                variant="outlined"
                {...register('partnerBirthplace', { required: `${t('partnerBirthplace')} ${t('required')}` })}
                error={!!errors.partnerBirthplace}
                helperText={errors.partnerBirthplace ? errors.partnerBirthplace.message : ''}
              />
            </Box>
          </>
        )}

        <Box sx={{ mb: 2, maxWidth: 300 }}>
          <TextField
            fullWidth
            size='small'
            label={t('email')}
            variant="outlined"
            type="email"
            {...register('email', {
              required: `${t('email')} ${t('required')}`,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: t('invalidEmail'),
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label={t('message')}
            variant="outlined"
            multiline
            rows={4}
            {...register('message', { required: `${t('message')} ${t('required')}` })}
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ''}
            sx={{ maxWidth: "800px" }}
          />
        </Box>

        <ThemeProvider theme={theme}>
          <Button type="submit" variant="contained" color="customColor">
            {t('sendEmail')}
          </Button>
        </ThemeProvider>

        {responseMessage && (
          <Box sx={{ mt: 2, maxWidth: 320 }}>
            <Alert severity="success">{t('successMessage')}</Alert>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default EmailForm;