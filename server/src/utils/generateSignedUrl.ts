import { storage } from "../storage/googleStorage"

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 * Note: when creating a signed URL, unless running in a GCP environment,
 * a service account must be used for authorization.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// The full path of your file inside the GCS bucket, e.g. 'yourFile.jpg' or 'folder1/folder2/yourFile.jpg'
// const fileName = 'your-file-name';

// Imports the Google Cloud client library

// Creates a client

export const generateV4ReadSignedUrl = async (bucketName: string, fileName: string
    ) => {
  // These options will allow temporary read access to the file
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  };

  // Get a v4 signed URL for reading the file
  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  console.log('Generated GET signed URL:');
  console.log(url);
  console.log('You can use this URL with any user agent, for example:');
  console.log(`curl '${url}'`);
}

