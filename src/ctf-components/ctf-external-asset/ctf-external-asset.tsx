import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFilePdf,
  faFileAlt,
  faFileArchive,
  faFileExcel,
  faFileWord,
  faArrowAltCircleDown,
  faFilePowerpoint,
  faFileImage,
  faFileAudio,
  faFileVideo,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles, Theme, Grid, Paper, Container } from '@material-ui/core';
import React, { useContext } from 'react';


import { ExternalAssetFragment } from './__generated__/ExternalAssetFragment';
import CtfExternalAssetUrl from './ctf-external-asset-url';

import LayoutContext from '@src/layout-context';

interface ExternalAssetInterface {
  bytes: number;
  created_at: string;
  duration?: number;
  format: string;
  height: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  tags: string[];
  type: string;
  url: string;
  src: string;
  link: string;
  version: number;
  width: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  assetCard: {
    borderColor: theme.palette.primary.main,
    marginRight: 'auto',
    marginBottom: theme.spacing(3),
    marginLeft: 'auto',
    maxWidth: '50rem',
  },
  assetCardAnchor: {
    alignItems: 'center',
    display: 'flex',
    padding: theme.spacing(2),
    textDecoration: 'none',
    '&&': {
      color: theme.palette.primary.dark,
      '&:hover, &:focus': {
        color: theme.palette.primary.main,
      },
    },
    '&:hover $assetCardAssetIcon': {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    '&:hover $assetCardDownloadIcon': {
      opacity: 1,
      transform: 'translate(-50%, -50%)',
    },
  },
  assetCardAssetIcons: {
    alignItems: 'center',
    display: 'flex',
    height: '5rem',
    overflow: 'hidden',
    position: 'relative',
  },
  assetCardAssetIcon: {
    color: theme.palette.primary.main,
    fontSize: '4.5rem',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  },
  assetCardDownloadIcon: {
    fontSize: '3rem',
    left: '50%',
    opacity: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -150%)',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  },
  assetCardAssetTitle: {
    marginTop: 0,
    marginLeft: theme.spacing(3),
    marginBottom: 0,
    '&&': {
      fontSize: '1.8rem',
      fontWeight: 700,
    },
  },
  imageEmbedContainer: {
    marginBottom: theme.spacing(7),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(10),
  },
}));

const getSrc = (
  asset: ExternalAssetInterface,
): { src: string | undefined; type: string } => {
  // Bynder
  let { src } = asset;
  let type = 'bynder';

  if (!src && asset.link) {
    // Dropbox
    src = asset.link;
    type = 'dropbox';
  } else if (!src && asset.url) {
    // Cloudinary
    src = asset.url;
    type = 'cloudinary';
  }

  return {
    src: src || undefined,
    type: src ? type : '',
  };
};

// https://stackoverflow.com/a/6997591
const getFileExtension = (src: string): string => {
  let extension: string;

  // Remove everything to the last slash in URL
  extension = src.substr(1 + src.lastIndexOf('/'));

  // Break URL at ? and take first part (file name, extension)
  [extension] = extension.split('?');

  // Sometimes URL doesn't have ? but #, so we should aslo do the same for #
  [extension] = extension.split('#');

  // Now we have only extension
  return extension.substr(extension.lastIndexOf('.')).toLowerCase();
};

const isEmbeddableImage = (src: string): boolean => {
  const extension = getFileExtension(src);
  const embeddableImageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

  return embeddableImageExtensions.includes(extension);
};

const getFileIcon = (extension: string): IconProp => {
  if (['.zip', '.rar', '.7zip'].includes(extension) === true) {
    return faFileArchive;
  }

  if (['.pdf'].includes(extension) === true) {
    return faFilePdf;
  }

  if (['.xls', '.xlsx', '.xltx', '.xltm'].includes(extension) === true) {
    return faFileExcel;
  }

  if (['.doc', '.docx'].includes(extension) === true) {
    return faFileWord;
  }

  if (['.ppt', '.pptx'].includes(extension) === true) {
    return faFilePowerpoint;
  }

  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(extension) === true) {
    return faFileImage;
  }

  if (['.mp3', '.waw'].includes(extension) === true) {
    return faFileAudio;
  }

  if (['.mp4', '.avi'].includes(extension) === true) {
    return faFileVideo;
  }

  return faFileAlt;
};

export interface CtfExternalAssetPropsInterface extends ExternalAssetFragment {
  externalAsset: ExternalAssetInterface[];
}

const CtfExternalAsset = (props: CtfExternalAssetPropsInterface) => {
  const { title, externalAsset, externalUrl, externalApp } = props;
  const layout = useContext(LayoutContext);
  const classes = useStyles();

  const asset = externalAsset?.[0];

  if (!asset) {
    if (
      externalApp !== undefined &&
      externalApp !== null &&
      externalApp !== ''
    ) {
      return <CtfExternalAssetUrl externalUrl={externalApp} />;
    }

    if (
      externalUrl !== undefined &&
      externalUrl !== null &&
      externalUrl !== ''
    ) {
      return <CtfExternalAssetUrl externalUrl={externalUrl} />;
    }

    return null;
  }

  const { src, type } = getSrc(asset);

  if (src === undefined) {
    return null;
  }

  if (isEmbeddableImage(src) === false) {
    // Not an image, render an asset card instead

    return (
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper variant="outlined" className={classes.assetCard}>
            <a
              className={classes.assetCardAnchor}
              href={src.replace('dl=0', 'dl=1')}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <div className={classes.assetCardAssetIcons}>
                <FontAwesomeIcon
                  icon={getFileIcon(getFileExtension(src))}
                  className={classes.assetCardAssetIcon}
                />
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className={classes.assetCardDownloadIcon}
                />
              </div>
              {title && <p className={classes.assetCardAssetTitle}>{title}</p>}
            </a>
          </Paper>
        </Grid>
      </Grid>
    );
  }

  let imgSrc = src;
  let imgSrcset = '';

  // Force https
  if (imgSrc.startsWith('http://')) {
    imgSrc = imgSrc.replace('http://', 'https://');
  }

  if (type === 'dropbox') {
    imgSrc = imgSrc.replace('dl=0', 'raw=1');
  } else if (type === 'cloudinary') {
    const widthPx = Math.min(asset.width, layout.containerWidth);

    imgSrcset = `${imgSrc.replace(
      'upload/',
      `upload/w_${widthPx}/`,
    )} ${widthPx}w, ${imgSrc.replace('upload/', `upload/w_${widthPx * 2}/`)} ${
      widthPx * 2
    }w`;
    imgSrc = imgSrc.replace('upload/', `upload/w_${widthPx}/`);
  }

  return (
    <Container maxWidth={false}>
      <div
        className={classes.imageEmbedContainer}
        style={{ maxWidth: layout.containerWidth }}
      >
        <img
          src={imgSrc}
          style={{ width: '100%', display: 'block' }}
          srcSet={imgSrcset}
          alt=""
        />
      </div>
    </Container>
  );
};

export default CtfExternalAsset;
