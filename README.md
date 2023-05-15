To set up this project with aws, after cloning the project:

1. Run npm i from within the project.
2. Edit the tsc-lambda.sh file.
    - Make sure that the lambda function names match those of yours.
3. Run the tsc-lambda.sh file. In command prompt, you simply type 'tsc-lambda.sh'
    - Running an sh file requires git. If you run this from the command prompt, visual studio may have you select a setting that automatically opens an external git terminal for this command.
4. Add a lambda layer to the lambdas for dependencies not included in the compiled files.
        - These dependences may include moment, uuid, aws-sdk...
    - Create a lambda layer in aws.
        - Navigate to lambda, then select layers on the left side.
        - Set the compatible runtime to the same as your lambda (should be Node.js 18.x).
        - Upload the typescript-javascript-encode.zip file to the lambda layer.
    - Go to the lambda and add the layer as a custom layer.
    - If the zip file doesn't work properly, or you need to create your own dependencies for the lambda layer, follow the instructions at [lambda layers](lambdaLayers.md)